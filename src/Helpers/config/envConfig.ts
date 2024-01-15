export const getBaseUrl =(): string=>{
    return process.env.NEXT_DEVELOPMENT_URL || "http://localhost:5003/api/v1"
}