
export interface Alert{
    title:string, 
    text:string, 
    icon:AlertIcon,
    confirmButtonText?:string
}

export enum AlertIcon{
    error= 'error',
    success = 'success',
    info = 'info',
    question = 'question',
    warning = 'warning'
}