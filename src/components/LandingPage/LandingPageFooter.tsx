import { Grid, GridItem, Heading, Link, Stack, Text } from "@chakra-ui/react";

const LandingPageFooter = () => {
  return (
    <Grid
      templateColumns="1fr 1fr 1fr 1fr"
      padding="28"
      backgroundColor="gray.200"
      gap="16"
    >
      <GridItem>
        <Stack>
          <Heading
            as="h1"
            fontWeight="extrabold"
            fontSize="3xl"
            textColor="blue.500"
          >
            FinTrack
          </Heading>
          <Text as="p" fontWeight="medium">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis et
            corrupti ab, quibusdam iure fugit accusamus facere officiis numquam
            minima maiores delectus nulla sit aut cumque, tempore maxime totam
            officia.
          </Text>
        </Stack>
      </GridItem>

      <GridItem>
        <Stack>
          <Heading as="h4" fontSize="xl">
            Links
          </Heading>
          <Stack as="nav">
            <Link>Home</Link>
            <Link>Contact Us</Link>
            <Link>FAQs</Link>
            <Link>Terms & Conditions</Link>
            <Link>Privacy Policy</Link>
          </Stack>
        </Stack>
      </GridItem>

      <GridItem>
        <Stack>
          <Heading as="h4" fontSize="xl">
            Contact Information
          </Heading>
          <Stack>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              possimus minus veritatis, odit accusantium nisi nihil sequi amet
              voluptatibus consequatur maxime harum alias nulla sit voluptate
              eum architecto. Accusamus, omnis
            </Text>
          </Stack>
        </Stack>
      </GridItem>

      <GridItem>
        <Stack>
          <Heading as="h4" fontSize="xl">
            Connect with us
          </Heading>
          <Stack as="nav">
            <Link>Facebook</Link>
            <Link>Instagram</Link>
            <Link>Twitter</Link>
            <Link>LinkedIn</Link>
          </Stack>
        </Stack>
      </GridItem>
    </Grid>
  );
};

export default LandingPageFooter;
