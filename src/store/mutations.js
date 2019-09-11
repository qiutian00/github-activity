import Cookies from "js-cookie";

export default {
  SET_LANGUAGE: (state, language) => {
    state.language = language;
    Cookies.set("language", language);
  }
}
