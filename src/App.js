import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import img4 from './img4.png';
import img5 from './img5.png';
import img6 from './img6.png';
import img7 from './img7.png';
import img8 from './img8.png';
import img9 from './img9.png';
import img10 from './img10.png';
import img11 from './img11.png';
import img12 from './img12.png';

import { Container, Row, Col } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      property: 'value'
    };
    this.funcName = this.funcName.bind(this);
  }

  componentDidMount () {
  }

  funcName () {}

  render () {
    return (
      <div className="Main">
        <Main />
      </div>
    );
  }
}

  function Main() {
  return (
    <Container>
      <Row>
        <Col xl={6} lg={6} md={6} sm={6} xs={6}>
          <nav>
            <ul>
              <li>Logo</li>
              <li>Home</li>
            </ul>
          </nav>
        </Col>
      </Row>
      <Row>
        <Section1 />
      </Row>
      
    </Container>
    
  );
}

function Section1() {
  return(
    <Col xl={12} lg={12} md={12} sm={12} xs={12}>
      <div className="heading">How to deploy a React App on Bluehost</div>
      <p className="content">
        <div className="step">0. Purchase a domain name and hosting from <a href="https://www.bluehost.com/track/kevlar2222/" target="_blank" rel="noopener noreferrer">
                    Bluehost</a>.</div>
        Full instructions available at link.
      </p>
      <p className="content">
        <div className="step">1. Find/Make the correct directory in Bluehost</div>

        If this will be your homepage, log into Bluehost, select <strong>advanced</strong>, then <strong>file manager</strong>.

        <img src={img1} alt=""></img>
        Navigate to <strong>public_html</strong>. Files will go here. Skip to step 2.
        <img src={img2} alt=""></img>

        If this will be part of a bigger design, then we need a subdomain. Log into Bluehost, select <strong>domains</strong>, 
        then <strong>subdomains</strong>. In the subdomain box enter the name of the new directory that you want to make. My directory is called <span className="itals">example</span>.
        <img src={img3} alt=""></img>
        After pressing <strong>create</strong>, you will receive a confirmation message.
        <img src={img4} alt=""></img>
        You can enter the URL in a browser to check that it has worked. The url is <span className="itals">http://yourDomainName/subdomainName</span> 
        <br></br>
        It will look like this:
        <img src={img5} alt=""></img>
        In the Bluehost menu navigate to <strong>advanced</strong>, <strong>file manager</strong>.
        Now <strong>public_html</strong> should contain a folder with your new directory name. This is where files will go.
        <img src={img6} alt=""></img>      
      </p>
      <p className="content">
      <div className="step">2. Get the React App ready on your local computer.</div>
        
        When your React app is ready for deployment, open the package.json file and add a homepage attribute with the url for your domain/subdomain.
        <br></br>
        The homepage url is <span className="itals">http://yourDomainName</span>
        <br></br>
        The subdomain url is <span className="itals">http://yourDomainName/subdomainName</span>
        <img src={img7} alt=""></img>
        Create a build folder on your local machine. I use node and the command <span className="itals">npm run build</span>.
        Inside the build folder, create a new file called <strong>.htaccess</strong> and copy and paste the following code into it:
      </p>
      <pre>
        <code className="code">
          &lt;IfModule mod_rewrite.c&gt;{'\n'}
          &nbsp; &nbsp; RewriteEngine On{'\n'}
          &nbsp; &nbsp; RewriteBase /{'\n'}
          &nbsp; &nbsp; RewriteRule ^index\.html$ - [L]{'\n'}
          &nbsp; &nbsp; RewriteCond %{'{'}REQUEST_FILENAME{'}'} !-f{'\n'}
          &nbsp; &nbsp; RewriteCond %{'{'}REQUEST_FILENAME{'}'} !-d{'\n'}
          &nbsp; &nbsp; RewriteCond %{'{'}REQUEST_FILENAME{'}'} !-l{'\n'}
          &nbsp; &nbsp; RewriteRule . /index.html [L]{'\n'}
          &lt;/IfModule&gt;
        </code>
      </pre>
      <img src={img8} alt=""></img>
      <p className="content">
        <div className="step">3. Copy files to Bluehost</div>

        Inside the Bluehost directory from step 1 (either <strong>public_html</strong> or <strong>public_html/subdomainName</strong>), select <strong>upload</strong>.
        Drag and drop all files <strong>(not folders!)</strong> into Bluehost. Don't forget <strong>.htaccess</strong>.
        You can view hidden files such as .htaccess on Bluehost by selecting <strong>Settings</strong> in the top right of the cPanel File Manager and checking the <strong>Show Hidden Files</strong> box.
        <img src={img9} alt=""></img>
        <img src={img10} alt=""></img>

        Folders have to be manually created. Create a new folder in Bluehost to match each folder in your local build directory.
        E.G. create a folder called <strong>static</strong>, then inside that create three more folders called <strong>js</strong>, <strong>css</strong> and <strong>media</strong>.
        Folders will depend on the file structure on your local machine. Make the Bluehost structure identical.

        Inside each folder, select <strong>Upload</strong>, then drag and drop all the relevant files.
        Once the files and folders are identical, you are done. Congratulations, your webpage has been successfully deployed.
        <img src={img11} alt=""></img>
        <img src={img12} alt=""></img>
      </p>
    </Col>
  );
}

export default App;
