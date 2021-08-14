import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box
          mr="4"
          textAlign="right"
        >
          <Text>Leoander Neves</Text>
          <Text
            color="gray.300"
            fontSize="small"
          >
            leoander.neves@test.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Leoander Neves" src="https://avatars.githubusercontent.com/u/44913085?v=4" />
    </Flex>
  );
}