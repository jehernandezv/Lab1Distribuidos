import express, {Application} from 'express';
import cors from 'cors';
import morgan from 'morgan';

class Server {
    public app : Application;
    public port : string;

    constructor() {
        this.app = express();
        this.port = process.argv[2];
        this.config();
        this.routes();
    }

    config(): void {

        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void {
        this.app.get('/', function (req, res) {
           res.json({message: 'Method get'});
        });

        this.app.post('/', function (req, res) {
            res.json({message: 'Got a POST request'});
        });

        this.app.put('/user', function (req, res) {
            res.json({message: 'Got a PUT request at /user'});
        });
    }

    start(): void {
        console.log('port: ' + this.port)
        this.app.listen(this.port, function () {
            console.log('app listening!');
        });
    }
}

const server = new Server();
server.start();