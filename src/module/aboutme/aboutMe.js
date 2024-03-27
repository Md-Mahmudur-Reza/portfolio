import styles from './aboutMe.module.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export default function AboutMe(){
    return (
            <Container>
        <div className={` ${styles.aboutmeSection}`}>
            <Row>
            <Col>
            <div className={`${styles.textSection}`}>
text
            </div>
                </Col>
                <Col>
            <div className={styles.imageSection}>
image
            </div>
                </Col>
            </Row>
                
            </div>
            </Container>
    )
}