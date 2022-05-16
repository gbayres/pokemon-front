import { useBreakpointValue } from "@chakra-ui/react";

export function useDevice() {
	return useBreakpointValue({ base: 'mobile', md: 'web' }, 'mobile') as 'mobile' | 'web';
}