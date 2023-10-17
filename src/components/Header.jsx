import { Button, Center, Heading, Stack } from '@chakra-ui/react';
import vinland from '/src/assets/vinland.jpeg';

export default function Header(props) {
    const { w, btnDir } = props;

    console.log(w);

    return (
        <Center backgroundImage={vinland} backgroundPosition='50% 35%' w={w} h="50vh" mt="1rem" flexDirection="column">
            <Heading color="white" fontWeight={100}>DOMINA EL TERRENO</Heading>
            <Stack direction={btnDir} spacing={5} pt={5}>
                <Button color="white" fontWeight={100} variant="outline" borderRadius={0} _hover={{ bg: '#fff', color: "#000" }}>VER DETALLES</Button>
                <Button color="white" fontWeight={100} variant="outline" borderRadius={0} _hover={{ bg: '#fff', color: "#000" }}>VER VIDEO</Button>
            </Stack>
        </Center>
    );
}