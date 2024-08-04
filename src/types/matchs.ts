export interface MatchHistoryOptionalConfigurableParams {
    limit: number;
    hl: string;
    game_type: string;
}

export interface MatchHistoryResponse {
    data: Daum[]
    meta: Meta
}

export interface Daum {
    id: string
    created_at: string
    game_map: string
    queue_info: QueueInfo
    version: string
    game_length_second: number
    is_remake: boolean
    is_opscore_active: boolean
    is_recorded: boolean
    record_info: any
    average_tier_info: AverageTierInfo
    participants: Participant[]
    teams: Team[]
    memo: any
    myData: MyData
}

export interface QueueInfo {
    id: number
    queue_translate: string
    game_type: string
}

export interface AverageTierInfo {
    tier: string
    division: number
    tier_image_url: string
    border_image_url: string
}

export interface Participant {
    summoner: Summoner
    participant_id: number
    champion_id: number
    team_key: string
    position: string
    role?: string
    items: number[]
    trinket_item: number
    rune: Rune
    spells: number[]
    stats: Stats
    tier_info: TierInfo
}

export interface Summoner {
    id: number
    summoner_id: string
    acct_id: string
    puuid: string
    game_name: string
    tagline: string
    name: string
    internal_name: string
    profile_image_url: string
    level: number
    updated_at: string
    renewable_at: string
}

export interface Rune {
    primary_page_id: number
    primary_rune_id: number
    secondary_page_id: number
}

export interface Stats {
    champion_level: number
    damage_self_mitigated: number
    damage_dealt_to_objectives: number
    damage_dealt_to_turrets: number
    magic_damage_dealt_player: number
    physical_damage_taken: number
    physical_damage_dealt_to_champions: number
    total_damage_taken: number
    total_damage_dealt: number
    total_damage_dealt_to_champions: number
    largest_critical_strike: number
    time_ccing_others: number
    vision_score: number
    vision_wards_bought_in_game: number
    sight_wards_bought_in_game: number
    ward_kill: number
    ward_place: number
    turret_kill: number
    barrack_kill: number
    kill: number
    death: number
    assist: number
    largest_multi_kill: number
    largest_killing_spree: number
    minion_kill: number
    neutral_minion_kill_team_jungle: any
    neutral_minion_kill_enemy_jungle: any
    neutral_minion_kill: number
    gold_earned: number
    total_heal: number
    result: string
    op_score: number
    op_score_rank: number
    is_opscore_max_in_team: boolean
    lane_score?: number
    op_score_timeline: OpScoreTimeline[]
    op_score_timeline_analysis?: OpScoreTimelineAnalysis
}

export interface OpScoreTimeline {
    second: number
    score: number
}

export interface OpScoreTimelineAnalysis {
    left: string
    right: string
    last: string
}

export interface TierInfo {
    tier?: string
    division?: number
    lp?: number
    level?: number
    tier_image_url: string
    border_image_url?: string
}

export interface Team {
    key: string
    game_stat: GameStat
    banned_champions: number | undefined[]
}

export interface GameStat {
    is_win: boolean
    champion_kill: number
    champion_first: boolean
    inhibitor_kill: number
    inhibitor_first: boolean
    rift_herald_kill: number
    rift_herald_first: boolean
    dragon_kill: number
    dragon_first: boolean
    baron_kill: number
    baron_first: boolean
    tower_kill: number
    tower_first: boolean
    horde_kill: number
    horde_first: boolean
    is_remake: boolean
    death: number
    assist: number
    gold_earned: number
    kill: number
}

export interface MyData {
    summoner: Summoner2
    participant_id: number
    champion_id: number
    team_key: string
    position: string
    role?: string
    items: number[]
    trinket_item: number
    rune: Rune2
    spells: number[]
    stats: Stats2
    tier_info: TierInfo2
}

export interface Summoner2 {
    id: number
    summoner_id: string
    acct_id: string
    puuid: string
    game_name: string
    tagline: string
    name: string
    internal_name: string
    profile_image_url: string
    level: number
    updated_at: string
    renewable_at: string
}

export interface Rune2 {
    primary_page_id: number
    primary_rune_id: number
    secondary_page_id: number
}

export interface Stats2 {
    champion_level: number
    damage_self_mitigated: number
    damage_dealt_to_objectives: number
    damage_dealt_to_turrets: number
    magic_damage_dealt_player: number
    physical_damage_taken: number
    physical_damage_dealt_to_champions: number
    total_damage_taken: number
    total_damage_dealt: number
    total_damage_dealt_to_champions: number
    largest_critical_strike: number
    time_ccing_others: number
    vision_score: number
    vision_wards_bought_in_game: number
    sight_wards_bought_in_game: number
    ward_kill: number
    ward_place: number
    turret_kill: number
    barrack_kill: number
    kill: number
    death: number
    assist: number
    largest_multi_kill: number
    largest_killing_spree: number
    minion_kill: number
    neutral_minion_kill_team_jungle: any
    neutral_minion_kill_enemy_jungle: any
    neutral_minion_kill: number
    gold_earned: number
    total_heal: number
    result: string
    op_score: number
    op_score_rank: number
    is_opscore_max_in_team: boolean
    lane_score?: number
    op_score_timeline: OpScoreTimeline2[]
    op_score_timeline_analysis?: OpScoreTimelineAnalysis2
}

export interface OpScoreTimeline2 {
    second: number
    score: number
}

export interface OpScoreTimelineAnalysis2 {
    left: string
    right: string
    last: string
}

export interface TierInfo2 {
    tier: string
    division: number
    lp: number
    level: any
    tier_image_url: string
    border_image_url: string
}

export interface Meta {
    first_game_created_at: string
    last_game_created_at: string
}
