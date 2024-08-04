export interface UserChampionStatOptionalConfigurableParams {
    game_type: 'SOLORANKED'
    season_id: number
}

export interface UserChampionStatsResponse {
    data: UserChampionStats
}

export interface UserChampionStats {
    game_type: string
    season_id: number
    year: any
    play: number
    win: number
    lose: number
    champion_stats: UserChampionStat[]
}

export interface UserChampionStat {
    id: number
    play: number
    win: number
    lose: number
    kill: number
    death: number
    assist: number
    gold_earned: number
    minion_kill: number
    turret_kill: number
    neutral_minion_kill: number
    damage_dealt: number
    damage_taken: number
    physical_damage_dealt: number
    magic_damage_dealt: number
    most_kill: number
    max_kill: number
    max_death: number
    double_kill: number
    triple_kill: number
    quadra_kill: number
    penta_kill: number
    game_length_second: number
    inhibitor_kills: number
    sight_wards_bought_in_game: number
    vision_wards_bought_in_game: number
    vision_score: number
    wards_placed: number
    wards_killed: number
    heal: number
    time_ccing_others: number
    op_score: number
    is_max_in_team_op_score: number
    physical_damage_taken: number
    damage_dealt_to_champions: number
    physical_damage_dealt_to_champions: number
    magic_damage_dealt_to_champions: number
    damage_dealt_to_objectives: number
    damage_dealt_to_turrets: number
    damage_self_mitigated: number
    max_largest_multi_kill: number
    max_largest_critical_strike: number
    max_largest_killing_spree: number
    snowball_throws: number
    snowball_hits: number
}
