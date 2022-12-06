function headGeneric(value: number[]): number
function headGeneric(value: boolean[]): boolean
function headGeneric(value: string[]): string
function headGeneric(value: string[][]): string[]
function headGeneric(value: Date[]): Date
function headGeneric(value: any): any {
    return value[0]
}

interface ModelData {
    title: string,
    value: string, // number [] boolean ....
    
}