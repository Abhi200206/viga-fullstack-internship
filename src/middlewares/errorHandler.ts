// global middleware function for cathing the errors globally to avoid server crash.
const errorHandler = (err: any, req: any, res: any, next: any) => {
    console.error(err);
    res.status(500).send('Internal Server Error');
};

export default errorHandler;
