/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import {
  Card, 
  CardHeader,
  CardBody, 
  Container, 
  Row, 
  Col
} from "reactstrap";

import React, { useState } from "react";
import Api from "components/Request/Api"
import Header from "components/Headers/Header.js";

const Default = (props) => {

  const [data, setData] = useState();

  React.useEffect(() => {
    Api
      .get('test')
      .then((response) => setData(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <Col lg="12">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <h3 className="mb-0">Default title</h3>
              </CardHeader>
              <CardBody>
                <p>Conteúdo - { data }</p>
                <pre></pre>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Default;
