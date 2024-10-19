import { Box, Button, Container, Heading, Input, useColorModeValue, useToast, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useProductStore } from "../store/product";
// import e from "express";


const CreatePage = () => {
  const [newproduct, setNewproduct] = useState({
    name: "",
    price: "",
    image: "",

  });

  const toast = useToast()

  const {createProduct}=useProductStore()

  const handleAddProduct = async () => {
    const {success, message} =await createProduct(newproduct);
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }

    setNewproduct({
      name: "",
      price: "",
      image: "",
    });


  };


  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8} >

        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create A New Product
        </Heading>

        <Box
        w={"full"} bg={useColorModeValue("white", "gray.800")}
        p={6} rounded={"ig"} shadow={"md"}
        
        >

          <VStack spacing={4}>

            <Input

            placeholder="Product Name"
            name="name"
            value={newproduct.name}
            onChange={(e) => setNewproduct({...newproduct, name: e.target.value})}       
            />

             <Input

            placeholder="Price"
            name="price"
            type="number"
            value={newproduct.price}
            onChange={(e) => setNewproduct({...newproduct, price: e.target.value})}       
            />

             <Input

            placeholder="Image URL"
            name="image"
            value={newproduct.image}
            onChange={(e) => setNewproduct({...newproduct, image: e.target.value})}       
            />

            <Button colorScheme="blue" onClick={handleAddProduct} w= "full">
              Add Product
            </Button>

          </VStack>


        </Box>

      </VStack>
      
      




    </Container>
  )
}

export default CreatePage;