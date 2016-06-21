import test from 'ava';
import fn from './';

test('Must extract the mime-type of data-uri', async t => {
  const res = fn('data:image/png;base64,iVBORw0KGgo')
  t.is(await res, 'image/png');
});
