
export interface Alert{
    title:string, 
    text:string, 
    icon:AlertIcon,
    confirmButtonText?:string
}


export interface AlertWithImage{
    title:string, 
    text:string, 
    imageUrl: string,
    imageWidth: number,
    imageHeight: number,
    showCancelButton: true,
    confirmButtonText?:string
    cancelButtonText?:string
}
export enum AlertIcon{
    error= 'error',
    success = 'success',
    info = 'info',
    question = 'question',
    warning = 'warning'
}