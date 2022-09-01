import React, { Fragment, useCallback, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import {
  PreviewPricingRequest,
  PreviewPricingResponse,
} from "../interfaces/pricing.interface";
import getPricingPreview from "../services/pricing.service";

const requestJson: PreviewPricingRequest = {
  type: 1,
  routeId: 2,
  dateIni: "2022-06-01T00:00:000Z",
  dateEnd: "2022-12-25T00:00:000Z",
};

export default function ModalPreview(props: any) {
 // console.log('Muestraloo', props.previews[0]);
  const previews: Array<PreviewPricingResponse> = props.previews;
  //console.log('Muestraloo', props.previews);
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Preview de Pricing
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Itinerario</th>
              <th>Viaje</th>
              <th>Precio 1</th>
              <th>Precio 2</th>
              <th>Precio 3</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <Fragment>
            {previews.map((p,i) => (
                <tr key={i}>
                  <td>{p.itinName}</td>
                  <td>{p.segmentTravel}</td>
                  <td>{p.price1}</td>
                  <td>{p.price2}</td>
                  <td>{p.price3}</td>
                  <td>{p.total}</td>
                </tr>
              ))}
            </Fragment>
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
