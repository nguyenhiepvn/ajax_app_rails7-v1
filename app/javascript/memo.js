const buildHTML = (XHR) => {
    const item = XHR.response.post;
    const html = `
      <div class="post">
        <div class="post-date">
          投稿日時：${item.created_at}
        </div>
        <div class="post-content">
          ${item.content}
        </div>
      </div>`;
    return html;
  };

function post (){
    console.log("イベント発火")
    const form = document.getElementById("form")
    form.addEventListener
    ("submit",(e) => 
        {
          const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
          console.log(csrfToken); 
            e.preventDefault();
            const formData = new FormData(form);
            const XHR = new XMLHttpRequest();
            
            XHR.open("POST","posts123", true);

            XHR.responseType = "json";
            XHR.send(formData)
            XHR.onload = () => 
            {
                list.insertAdjacentHTML("afterend", buildHTML(XHR));
            };
        }
    )
  };

window.addEventListener('turbo:load', post);