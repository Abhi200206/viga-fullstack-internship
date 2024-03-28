// middleware function which logs the every request method and its url with the time
const logger = (req: any, res: any, next: any) => {
    console.log(`${req.method} ${req.url} - ${new Date()}`);
    next();
};

export default logger;