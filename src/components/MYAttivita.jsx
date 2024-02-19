import 'bootstrap/dist/css/bootstrap.min.css'
import "./style/MyAttivita.css";
import { Card, CardBody, CardFooter } from 'react-bootstrap'


const MyAttivita = () => {
    return (
        <Card className="mb-2 p-0">
            <CardBody className="p-0 pt-3">
                <div className="d-flex justify-content-between ms-4 mt-3 me-4">
                    <div>
                        <h5 className="mb-0 fw-bold">Attività</h5>
                        <p className="fw-semibold text-underline follower">
                            0 follower
                        </p>
                    </div>
                    <div className="d-flex align-items-top">
                        <div className="me-1 mt-1">
                            <button
                                type="button"
                                className="rounded-pill px-3 py-1 btn btn-outline-primary me-2 fw-semibold sezioneprof"
                            >
                                Crea un post
                            </button>
                        </div>
                        <div className="ms-1 pencildivexp mb-2">
                        <i className="bi bi-pencil-fill"></i>
                        </div>
                    </div>
                </div>
                <div className="ms-4">
                    <p className="mb-0 fw-semibold lh">
                        Non hai ancora pubblicato nulla
                    </p>
                    <p>I post che condividi appariranno qui</p>
                </div>
            </CardBody>
            <CardFooter className="box-gray fw-semibold">
                <p className="mostra mb-0">Mostra tutte le attività ➝</p>
            </CardFooter>
        </Card>
    );
}

export default MyAttivita