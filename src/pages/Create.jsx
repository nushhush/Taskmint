import React, { useState } from "react";
import { Container, Col, Row } from 'reactstrap';

function Create() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [nfts, setNfts] = useState([]); // State to store NFT data

  const handleCreate = () => {
    // Generate a unique ID for the new NFT
    const id = nfts.length + 1;
    
    // Create a new NFT object
    const newNFT = {
      id: id,
      title: title,
      desc: description,
      imgUrl: URL.createObjectURL(selectedFile), // Generate URL for uploaded image
      creator: "", // Add creator information if needed
      creatorImg: "", // Add creator image URL if needed
      currentBid: 0, // Set the initial bid to 0 or any default value
    };

    // Add the new NFT object to the nfts array
    setNfts([...nfts, newNFT]);

    // Reset the form fields after creating the NFT
    setTitle("");
    setDescription("");
    setSelectedFile(null);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <Container>
      <Row>
        <Col lg='9' md='8' sm='6'>
          <div className="create__item">
            <form>
              <div className="form_input">
                <label htmlFor=''>Title</label>
                <input type='text' placeholder='Enter title'
                  value={title} onChange={(e) => setTitle(e.target.value)} />
              </div>
              <div className="form_input">
                <label htmlFor=''>Description</label>
                <textarea name='' cols='20' rows='7' placeholder='Enter your description' className='w-100'
                  value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
              </div>
              <div className="form_input">
                <label htmlFor=''>Upload Image</label>
                <input type='file' accept='image/*' onChange={handleFileChange} />
              </div>
              <button type="button" className='btn' onClick={handleCreate}>Create</button>
            </form>
          </div>
        </Col>
      </Row>
      <Row>
        {nfts.map(nft => (
          <Col lg='3' md='4' sm='6' key={nft.id}>
            <div className="nft-item">
              <img src={nft.imgUrl} alt={nft.title} />
              <h3>{nft.title}</h3>
              <p>{nft.desc}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Create;
