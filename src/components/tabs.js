import axios from 'axios'

const Tabs = (topics) => {
  const tabsDiv = document.createElement("div");
  topics.forEach((topic) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("tab");
    newDiv.textContent = topic;
    tabsDiv.appendChild(newDiv);
  })
  tabsDiv.classList.add("topics");
  return tabsDiv
}



const tabsAppender = (selector) => {
  const selector2 = document.querySelector(selector);
  axios.get('http://localhost:5001/api/topics')
  .then((res) => {
    const newTabs = Tabs(res.data.topics);
    selector2.appendChild(newTabs);
  })
  .catch((err) => {
    console.error(err);
  })
}

export { Tabs, tabsAppender }
