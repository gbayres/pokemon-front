import { Box, Flex, ListItem, UnorderedList } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import "./_all.scss";

type PageTemplateType = {
	children?: ReactNode;
}

export const PageTemplate: FC<PageTemplateType> = ({
	children,
}: PageTemplateType) => {
	return (
		<Box>
			<Flex as="header" w="100%" h={100} bgColor="white" />
			<Flex>
				<Box as="nav" className="navigator">
					<UnorderedList>
						<ListItem>
							Select random pokemons
						</ListItem>
					</UnorderedList>
				</Box>
				<Box className="main-content" w="100%">
					{children}
				</Box>
			</Flex>
		</Box>
	)
}