import React, { useEffect, useState } from "react";
import data from "./Data";
import './Products.css';
import CallModal from "./Modal";
import { Modal } from "react-bootstrap";

function AdminPanel() {
    const [shoes, setShoes] = useState(
        // ".data" was not an array {} but an Object [key, {}], and we have to filter only array data because filter operations can not be performed on objects but only arrays.
        Object.values(data).map((value) => (value))
    );
    const [shoesid, setShoesid] = useState(
        // So we stored the key of .data is another veriable so that it can also be used if needed. 
        Object.keys(data).map((key) => (key))
    );
    const [filteredShoes, setFilteredShoes] = useState(shoes);
    // Filtered data will be used to display on screen. It will help perform Delete/Add function by user. 
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);
    console.log(shoes);


    const handleDelete = (value) => {
        setItemToDelete(value.ser);
        setIsModalOpen(true);
    }

    function confirmDelete() {

        const filter = filteredShoes.filter((shoes) =>
            //  Data is in FilteredShoes and it is passed as "shoes" into the arrow function. 
            shoes.ser != itemToDelete
        );
        setFilteredShoes(filter);
        setIsModalOpen(false);
        setItemToDelete(null);

        // handleDelete function will filter all the enteries acxept the one user clicked the <Button> Delete <Button/> on. 
    }
    console.log(shoesid);


    function handleEdit(value) {
        const newName = window.prompt('Update the Name', ' ');
        // This prompt will appear on the screen to take "input value" from user.
        const newDesc = window.prompt('Update Description', ' ');
        const newPrice = window.prompt('Update the Price', ' ');

        const editedShoes = filteredShoes.map((shoes) =>
            shoes.ser === value.ser ? { ...shoes, name: newName, price: newPrice } : shoes
        )

        setFilteredShoes(editedShoes)
    }

    function handleAdd() {
        const newSer = window.prompt('Enter the Ser of Product i.e. "product6"', ' ');
        const newName = window.prompt('Enter the Name', ' ');
        const newDesc = window.prompt('Enter Description', ' ');
        const newPrice = window.prompt('Enter the Price', ' ');
        const newImage = window.prompt('Enter the Image URL', ' ');

        // const newSer= "Product12" ;
        // const newName= "Boot" ;
        // const newDesc= "Nothing" ;
        // const newPrice= "240" ;
        // const newImage= "None" ;        
        const newShoe = { ser: newSer, name: newName, price: newPrice, image: newImage }
        setFilteredShoes([...filteredShoes, newShoe]);
    }

    const show = () => setIsModalOpen(true);
    const close = () => setIsModalOpen(false);


    return (
        <div>
            <h3> You are Logged In!</h3>

            <button onClick={() => handleAdd()} className="add"> Add New Shoe </button>
            {/* <button onClick={show} className="add"> Modal </button> */}

            {/* <!-- Button trigger modal --> */}
            {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Launch demo modal
            </button> */}

            <Modal show={isModalOpen} onHide={close}>
                <Modal.Header>
                    <h3> Delete Item </h3>
                </Modal.Header>
                <Modal.Body>
                    <p> Are you sure you want to Delete ?</p>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={confirmDelete} className="delete" > Delete </button>
                    <button onClick={close} > Cancel </button>
                </Modal.Footer>
            </Modal>



            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Ser. </th>
                        <th>Name </th>
                        <th>Description </th>
                        <th>Price </th>
                        <th>Action #1 </th>
                        <th>Action #2 </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.entries(filteredShoes).map(
                            ([id, value]) => (

                                <tr>
                                    <td>{value.ser}</td>
                                    <td>{value.name}</td>
                                    <td> Lorem Ipsum </td>
                                    <td> {value.price} </td>
                                    <td><button onClick={() => handleDelete(value)} className="delete"> Delete </button></td>
                                    <td><button onClick={() => handleEdit(value)} className="edit"> Edit </button></td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>


        </div>
    );
}

export default AdminPanel;


