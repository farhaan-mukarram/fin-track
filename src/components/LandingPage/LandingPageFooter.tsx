import { Grid, GridItem, Heading, Link, Stack, Text } from "@chakra-ui/react";

const SOCIAL_LINKS = ["Facebook", "Instagram", "Twitter", "LinkedIn"];

const NAVIGATION_LINKS = [
  "Home",
  "Contact Us",
  "FAQs",
  "Terms & Conditions",
  "Privacy Policy",
];

const renderFooterLinks = (links: String[]) =>
  links.map((link) => <Link>{link}</Link>);

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
          <Heading as="h4" fontSize="xl" textColor="blue.500">
            Links
          </Heading>
          <Stack as="nav">{renderFooterLinks(NAVIGATION_LINKS)}</Stack>
        </Stack>
      </GridItem>

      <GridItem>
        <Stack>
          <Heading as="h4" fontSize="xl" textColor="blue.500">
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
          <Heading as="h4" fontSize="xl" textColor="blue.500">
            Connect with us
          </Heading>
          <Stack as="nav">{renderFooterLinks(SOCIAL_LINKS)}</Stack>
        </Stack>
      </GridItem>
    </Grid>
  );
};

export default LandingPageFooter;
