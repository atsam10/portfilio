// for scroll effect
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
};


function Get_info(Work_name){
  var   wp = document.getElementById("Work_name");
  var   wr = document.getElementById("work_role");
  var   wpe = document.getElementById("work_period");
  var   wd = document.getElementById("work_des");
  console.log(Work_name)
  if(Work_name == "909IT"){

      wr.innerHTML = ` Software Developer ( <span class="color-lightgreen"> Intern </span> )`;
      wpe.innerHTML = "Feb 2022 - Present (6 months +)";
      wd.innerHTML = ` <ul class="des_list">
      <li class="des_des">
          Demonstrated knowledge of development tools and methodologies such as Source
          Control (GIT), FileZilla and Postman
      </li>

      <li class="des_des">
          Good handle on PHP, Web API, HTML5, CSS3, Bootstrap, JavaScript, MySQL, jQuery, and JavaScript frameworks, and agile-based methodologies.
      </li>

      <li class="des_des">
          Provided technical support as needed.
      </li>

      <li class="des_des">
          Created, improved and documented APIs for future reference.
      </li>

      <li class="des_des">
          Assisted coding/testing in a collaborative environment.
      </li>

      <li class="des_des">
          Involved in Agile Scrum Methodologies using technologies like Jira Application.
      </li>

      <li class="des_des">
          Fixed bugs, and resolved problems.
      </li>

      <li class="des_des">
          Reviewed code and added functionalities for existing CMS.
      </li>

      <li class="des_des">
          Worked across multiple platforms/components, including third-party integrations, internal and external applications, and API-based applications.
      </li>
  </ul>`

  }
  else if(Work_name == "TSR"){
    wr.innerHTML = "Bartender"
    wpe.innerHTML = "Sep 2019 - Jul 2022 (2 yrs 11months +)"
    wd.innerHTML = ` <ul class="des_list">
    <li class="des_des">
    Undertook general serving duties of both food and beverage including meals
    and drinks to tables.
    </li>

    <li class="des_des">
    Checked stock level and order the products accordingly.
    </li>

    <li class="des_des">
        Provided technical support as needed.
    </li>

    <li class="des_des">
    Followed daily and weekly systems and procedures to ensure a high level of
    presentation, hygiene service, product quality and security.
    </li>

    <li class="des_des">
    Supervised Staff, run shifts and professionally managed customers' complaints
    and feedback.
    </li>
</ul>`

  }
  else if(Work_name == "ME"){
    wr.innerHTML = "Barista"
    wpe.innerHTML = "Jun 2020 - Nov 2021 (1 yr 6months +)"
    wd.innerHTML = ` <ul class="des_list">
    <li class="des_des">
    Have proficient knowledge of using software applications such as EFTPOS,
    Microsoft office suite application, and POS terminal.
    </li>
    <li class="des_des">
    Made Coffee and Served the customer
    </li>
    <li class="des_des">
    followed daily and weekly systems and procedures to ensure a high level of
    presentation, hygiene service, product quality and security
    </li>

    
</ul>`

  }


}



