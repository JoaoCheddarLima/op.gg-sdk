import axios from 'axios';

import {
  ChampionData,
  ChampionResponse,
  MatchHistoryOptionalConfigurableParams,
  MatchHistoryResponse,
  UserChampionStatOptionalConfigurableParams,
  UserChampionStatsResponse,
} from './types/index';
import { addParamsByObject } from './utils';

/**
 * Opgg class to get match history from a user
 * @param {string} userId
 * @param {Boolean} ignoreValidation
 * @returns {OPGG}
 */
export default class OPGG {
    private userId: string | undefined;
    public static baseUrl: URL = new URL('https://lol-web-api.op.gg/api/v1.0/internal/bypass');

    constructor(userId: string, ignoreValidation?: Boolean) {
        this.userId = userId;

        if (!this.userId) {
            throw new Error('User ID is required');
        }

        if (this.userId.length !== 47 && !ignoreValidation) {
            throw new Error('Please use a valid user id or set ignoreValidation to true to ignore this step.');
        }
    }

    /**
     * Optional parameters for the match history endpoint but it already comes with an default
     * @param {MatchHistoryOptionalConfigurableParams | undefined} params - Optional parameters for the match history endpoint
     * @returns {Promise<MatchHistoryResponse>} - Match history response
     */
    public async getMatchHistory(params: MatchHistoryOptionalConfigurableParams = {
        limit: 20,
        hl: 'en_US',
        game_type: 'soloranked'
    }): Promise<MatchHistoryResponse> {
        if (params.limit <= 0 || params.limit > 20) throw new Error('Limit must be between 1 and 20');

        const endpoint = new URL(OPGG.baseUrl.href + `/games/br/summoners/${this.userId}`);
        addParamsByObject(endpoint, params);

        const response: MatchHistoryResponse = (await axios.get(endpoint.href)).data;

        return response;
    }

    /**
     * Get user champion stats
     * @param {UserChampionStatOptionalConfigurableParams} params - Optional parameters for the user champion stats endpoint
     * @returns {Promise<UserChampionStatsResponse>} - User champion stats
     */
    public async getChampionStats(params: UserChampionStatOptionalConfigurableParams = {
        game_type: 'SOLORANKED',
        season_id: 27
    }): Promise<UserChampionStatsResponse> {
        const endpoint = new URL(OPGG.baseUrl.href + `/summoners/br/${this.userId}/most-champions/rank`);
        addParamsByObject(endpoint, params);

        const response: UserChampionStatsResponse = (await axios.get(endpoint.href)).data;

        return response;
    }

    /**
     * Get a full list of game champions
     * @returns {Promise<ChampionData[] | void>} - Game champions
     */
    public static async getGameChampions(): Promise<ChampionData[] | void> {
        try {
            const endpoint = new URL(this.baseUrl.href + `/meta/champions?hl=en_US`);
            const response: ChampionResponse = (await axios.get(endpoint.href)).data;

            return response.data;
        } catch (err) {

        }
    }
}