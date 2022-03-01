import React, { useState } from "react";
import { Form, Button, Image, Row, Col, Alert } from "react-bootstrap";
import { API } from "../config/api";

export default function Products() {
  const [message, setMessage] = useState();
  const [preview, setPreview] = useState(null); //For image preview
  const [form, setForm] = useState({
    image: "",
    title: "",
    price: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

    // Create image url for preview
    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Configuration
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };

      // Store data with FormData as object
      const formData = new FormData();
      if (form.title && form.image && form.price) {
        formData.set("image", form?.image[0], form?.image[0]?.name);
        formData.set("title", form.title);
        formData.set("price", form.price);
      }

      console.log(form);

      // Insert product data
      const response = await API.post("/product", formData, config);
      setForm({
        image: "",
        title: "",
        price: "",
      });
      setPreview(null);
      setMessage({ text: response.data.message, variant: "success" });
      console.log(response);
    } catch (error) {
      setMessage({ text: error.response.data.message, variant: "danger" });
      console.log(error);
    }
  };

  return (
    <div className="container p-5">
      <Row style={{ color: "#BD0707" }}>
        <Col lg={7} className="p-5">
          <Form onSubmit={handleSubmit}>
            <Form.Label className="fs-1 fw-bold mb-5">Product</Form.Label>
            {message && (
              <Alert variant={message.variant} className="py-1 fw-bold">
                {message.text}
              </Alert>
            )}
            <Form.Group
              className="mb-4"
              controlId="formBasicText"
              style={{
                borderRadius: "0.3rem",
                border: "1px solid #BD0707",
              }}
            >
              <Form.Control
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Name Product"
              />
            </Form.Group>
            <Form.Group
              className="mb-4"
              controlId="formBasicNumber"
              style={{
                borderRadius: "0.3rem",
                border: "1px solid #BD0707",
              }}
            >
              <Form.Control
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                placeholder="Price"
              />
            </Form.Group>
            <Form.Group
              className="mb-5"
              controlId="formBasicFile"
              style={{
                borderRadius: "0.3rem",
                border: "1px solid #BD0707",
              }}
            >
              {" "}
              <Form.Control
                type="file"
                placeholder="Photo Product"
                name="image"
                onChange={handleChange}
                // id={<Image src={Image2} />}
              />
            </Form.Group>
            <Button
              className="container bg-btn-red fw-bold fs-5"
              variant=""
              type="submit"
              onClick={handleSubmit}
              style={{
                borderRadius: "0.3rem",
              }}
            >
              Add Product
            </Button>
          </Form>
        </Col>

        <Col lg={5} className="d-flex justify-content-center">
          {" "}
          {preview && (
            <Image
              className=""
              style={{ borderRadius: "0.5rem" }}
              src={preview}
            />
          )}
        </Col>
      </Row>
    </div>
  );
}
