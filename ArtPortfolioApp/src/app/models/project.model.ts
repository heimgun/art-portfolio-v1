export interface IProject {
    id: number,
    name: string,
    date: string,
    description: string,
    linkToWork?: string,
    img: string
}

export interface ListofProjects {
    results: IProject [];
}