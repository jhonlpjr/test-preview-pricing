import React, { Fragment, useState } from "react";
import logo from "./logo.svg";
import ReactDOM from "react-dom";
import ModalPreview from "./components/modal-preview";
import "./App.css";
import { Button } from "react-bootstrap";
import getPricingPreview from "./services/pricing.service";
import { PreviewPricingRequest } from "./interfaces/pricing.interface";
import axios from "axios";

export default function App() {
  const requestJson: PreviewPricingRequest = {
    type: 1,
    routeId: 2,
    dateIni: "2022-06-01T00:00:000Z",
    dateEnd: "2022-12-25T00:00:000Z",
  };

  const [modalShow, setModalShow] = useState(false);
  const [data, setData] = useState([
    {
      itinName: "string",
      segmentTravel: "string",
      price1: 1,
      price2: 2,
      price3: 3,
      total: 4,
    },
  ]);

  function previewPricingSubmit() {
    axios
      .post("http://localhost:8080/pricing/preview", requestJson)
      .then((response) => {
        setData(response.data.data);
      });
  }

  return (
    <>
      <Button
        variant="primary"
        onClick={() => {
          setModalShow(true);
          previewPricingSubmit();
        }}
      >
        Ver Preview de Pricing
      </Button>

      <ModalPreview previews={data} show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
