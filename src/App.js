import { Container, Row, Col, Button, Navbar, NavbarBrand } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import github from './github.svg';
import './App.css';

function App() {
  const windowUrl = window.location.search;
  const params = new URLSearchParams(windowUrl);
  var markdown = `
  # Base64 encoding into Markdown text

  Use a website link https://www.base64encode.org/ to encode your Markdown text. You can then pass your encoding text as a parameter to display your Markdown, as such: https://base64-to-markdown.surge.sh?data=IyBMb3JlbSBpcHN1bQoKTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQ3JhcyBxdWlzIGRvbG9yIGxhY3VzLiBNYXVyaXMgaWQgZ3JhdmlkYSBsb3JlbS4gQWxpcXVhbSBpZCBtYXVyaXMgcGhhcmV0cmEsIG1hbGVzdWFkYSBkaWFtIHV0LCB0ZW1wdXMgbmliaC4gTnVsbGEgcXVpcyBsYWN1cyB1bHRyaWNlcywgbGFvcmVldCBlbmltIHNlZCwgZGlnbmlzc2ltIGxpYmVyby4gTnVsbGEgZmFjaWxpc2kuIE5hbSBhYyBzYXBpZW4gZXQgb3JjaSBpbnRlcmR1bSBwcmV0aXVtIGVnZXQgZXQgZGlhbS4gU2VkIG5lYyB0b3J0b3IgbWkuIEluIGVnZXQgbGVvIHZlc3RpYnVsdW0gbnVuYyBtYWxlc3VhZGEgYmxhbmRpdCBhIGlkIHRvcnRvci4=.
  `
  if (params.get('data')) {
    markdown = atob(params.get('data'))
  }

  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([markdown],    
                {type: 'text/plain;charset=utf-8'});
    element.href = URL.createObjectURL(file);
    element.download = "dataProfiling.md";
    document.body.appendChild(element);
    element.click();
  }

  return (
    <div>
      <Container className='dont-break-out' style={{paddingTop: 32, paddingBottom: 32, display: 'flex', flexDirection: 'column', minHeight: '90vh', overflowWrap: 'break-word'}}>
        <Row>
          <Col>
            <ReactMarkdown plugins={[gfm]} children={markdown} />
          </Col>
        </Row>
        <Row>
          <Col style={{textAlign: 'center'}}>
            <Button variant='dark' onClick={() => downloadTxtFile()}>Download</Button>
          </Col>
        </Row>
      </Container>
      <Navbar bg='dark' style={{padding: 0}}>
        <Container style={{justifyContent: 'center', height: '10vh', padding: 0}}>
          <NavbarBrand>
            <a href='https://github.com/JorisTruong/base64-to-markdown' target='_blank' rel='noreferrer'>
              <img src={github} height='32px' width='32px' alt='github'/>
            </a>
          </NavbarBrand>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
