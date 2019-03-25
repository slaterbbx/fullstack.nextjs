import * as React from 'react';
import Link from 'next/link';

import CounterUI from '../../components/CounterUI/CounterUI';

const Page2 = () => (
	<>
		<CounterUI />
		<Link href="/"><a> Home</a></Link>
	</>
)

export default Page2;