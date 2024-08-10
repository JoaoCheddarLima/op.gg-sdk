export interface ChampionResponse {
    data: ChampionData[]
}

export interface ChampionData {
    id: number
    key: string
    name: string
    image_url: string
    evolve: Evolve[]
    blurb: string
    tags: string[]
    lore: string
    partype: string
    info: Info
    stats: ChampionStats
    enemy_tips: string[]
    ally_tips: string[]
    skins: Skin[]
    passive: Passive
    spells: Spell[]
}

export interface Evolve {
    key: string
    name: string
    image_url: string
}

export interface Info {
    attack: number
    defense: number
    magic: number
    difficulty: number
}

export interface ChampionStats {
    hp: number
    hpperlevel: number
    mp: number
    mpperlevel: number
    movespeed: number
    armor: number
    armorperlevel: number
    spellblock: number
    spellblockperlevel: number
    attackrange: number
    hpregen: number
    hpregenperlevel: number
    mpregen: number
    mpregenperlevel: number
    crit: number
    critperlevel: number
    attackdamage: number
    attackdamageperlevel: number
    attackspeed: number
    attackspeedperlevel: number
}

export interface Skin {
    id: number
    champion_id: number
    name: string
    has_chromas: boolean
    splash_image: string
    loading_image: string
    tiles_image: string
    centered_image: string
    skin_video_url?: string
    prices?: Price[]
    sales: any
    release_date?: string
}

export interface Price {
    currency: string
    cost: number
}

export interface Passive {
    name: string
    description: string
    image_url: string
    video_url?: string
}

export interface Spell {
    key: string
    name: string
    description: string
    max_rank: number
    range_burn: number[]
    cooldown_burn: number[]
    cooldown_burn_float: number[]
    cost_burn: number[]
    tooltip: string
    image_url: string
    video_url?: string
}
