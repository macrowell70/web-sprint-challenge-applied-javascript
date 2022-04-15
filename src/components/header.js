const Header = (title, date, temp) => {
  const headerDiv = document.createElement("div");
  const dateSpan = document.createElement("span");
  const titleH1 = document.createElement("h1");
  const tempSpan = document.createElement("span");

  headerDiv.classList.add("header");
  dateSpan.classList.add("date");
  tempSpan.classList.add("temp");

  dateSpan.textContent = date;
  titleH1.textContent = title;
  tempSpan.textContent = temp;

  headerDiv.appendChild(dateSpan);
  headerDiv.appendChild(titleH1);
  headerDiv.appendChild(tempSpan);

  return headerDiv
}


const headerAppender = (selector) => {
  const selector2 = document.querySelector(selector)
  const newHeader = Header('This Title', 'April 15, 2022', '58 degrees');
  selector2.append(newHeader);
}



export { Header, headerAppender }
