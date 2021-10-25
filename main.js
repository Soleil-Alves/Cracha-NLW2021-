  
        const LinksSocialMedia = {
            github : "Soleil-Alves",
            instagram : "solsolstarlight",
            twitter : "SolSolStarlight"
          }
  
          function changeSocialMediaLinks(){
            for(let li of SocialLinks.children){
              const social = li.getAttribute('class')
             
              li.children[0].href = `https://${social}.com/${
                LinksSocialMedia[social]}`
             }
            }
        
            changeSocialMediaLinks()

            function GetGithubProfileInfos(){
             const url = `https://api.github.com/users/${LinksSocialMedia.github}`
          
             fetch(url)
             .then(response => response.json())
             .then(data => {
                 UserName.textContent = data.name
                 UserBio.textContent = data.bio
                 UserLink.href = data.html_url
                 UserPhoto.src = data.avatar_url
                 UserLogin.textContent = data.login
             })

            }

            GetGithubProfileInfos()