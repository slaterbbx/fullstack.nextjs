import * as React from 'react';
import Link from 'next/link';

import CounterUI from '../components/CounterUI/CounterUI';

const Index = () => (
	<>
		<CounterUI />
		<Link href="/page2"><a> Page 2</a></Link>
	</>
)

export default Index;