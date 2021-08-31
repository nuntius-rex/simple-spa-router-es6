console.log("About template loaded");
export default {
  defDisplay: function() {

    let display=`
      <h1>About</h1>
      <p>This is the About page.</p>
      <button type="button" id="aboutButton">Secondary Process</button>
      <div id="secondProcResult"></div>
    `;
    return display;

  }
}
