export interface Skill {
  name: string
  value: number
  skillId: string
}

export interface Stat {
  name: string
  value: number
}

export interface Mabu {
  itemId: string
  itemName: string
  enchant: {
    upgrade: number
    status?: Stat[]
    explain?: string
    reinforceSkill?: [
      {
        jobId: string
        jobName: string
        skills: Skill[]
      }
    ]
  }[]
  slots: {
    slotId: string
    slotName: string
  }[]
}

export type MabuResponse = Mabu[]
export type OneMabuResponse = Mabu
