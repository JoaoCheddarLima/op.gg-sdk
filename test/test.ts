import OPGG from '../src/index';

const opgg = new OPGG('jgbvpu1sta1kqo5UtoRDI343ics0aU3NZqIlG0ni4MSOYQI');

opgg.getMatchHistory().then(console.log);