import { axios, router, toaster } from '../lib';

const signup = async (ref, data) => {
  try {
    //// execute google recaptcha
    //data['g-recaptcha-response'] = await ref.current.executeAsync();

    // execute main action
    await axios.post('signup', data);

    // notify user and other actions
    toaster.success('Contul tau a fost creat');
    router.push('/thank-you');
  } catch (err) {
    toaster.error(err.message);

    // reset google recaptcha on invalid login
    ref.current.reset();
  }
};

export default signup;
