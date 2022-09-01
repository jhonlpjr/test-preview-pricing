export interface ResponseApiOR<T> {
    statusCode: number;
    message: string;
    data: T[];
    success: any[];
    fail: any[];
}