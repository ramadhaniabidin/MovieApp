﻿var app = angular.module('app', ['angular.filter']);

app.service('svc', function ($http) {
    this.svc_GetAllAccounts = function () {
        var response = $http({
            method: 'GET',
            url: 'https://localhost:7116/api/Login/GetAllAccounts',
            data: {},
            contentType: 'application/json; charset=utf-8',
            dataType: 'json'
        });
        return response;
    }

    this.svc_CheckAccount = function (username, password) {

        var response = $http({
            method: 'GET',
            url: 'https://localhost:7116/api/Login/GetAccount/' + encodeURIComponent(username) + '/' + encodeURIComponent(password),
            data: {},
            contentType: 'application/json; charset=utf-8',
            dataType: 'json'
        });

        return response;
    }
})

app.controller('ctrl', function ($scope, svc) {
    $scope.username = '';
    $scope.password = '';


    $scope.GetAllAcccounts = function () {
        try {
            var promise = svc.svc_GetAllAccounts();
            promise.then(function (response) {
                /*var resp_data = JSON.parse(response.data.d);*/
                console.log(response.data);
            })
        }
        catch (e) {
            console.log(e.message);
        }
    }

    $scope.Login = function () {
        console.log($scope.username);
        console.log($scope.password); 
        var promise = svc.svc_CheckAccount($scope.username, $scope.password);
        promise.then(function (response) {
            alert("Login success");
            location.href = "\Movie"
        }).catch(function (error) {
            /*alert("Login failed");*/
            $scope.danger();
        });
    }

    const ava = ({ icon = 'success', toast = false, progressBar = true, text = null, timer = 4000, btnText = 'Okay', direction = 'rtl', position = 'top-right' }) => {
        const modal = document.createElement('section');
        modal.setAttribute('class', 'ava-modal');
        document.body.appendChild(modal);
        const alert = document.createElement('div');
        alert.setAttribute('class', 'ava-alert');
        modal.appendChild(alert);
        var avaIcon;
        if (icon == 'success' && toast == false) {
            avaIcon = `
        <div class="ava-alert__icon" style="background: #438C5E;">
        <div class="svg-box">
            <svg class="circular green-stroke">
            <circle class="path" cx="75" cy="75" r="50" fill="none" stroke-width="5" stroke-miterlimit="10"/>
        </svg>
        <svg class="checkmark green-stroke">
            <g transform="matrix(0.79961,8.65821e-32,8.39584e-32,0.79961,-489.57,-205.679)">
                <path class="checkmark__check" fill="none" d="M616.306,283.025L634.087,300.805L673.361,261.53"/>
            </g>
        </svg>
        </div>
    </div>
      `;

        } else if (icon == 'info' && toast == false) {
            avaIcon = `
        <div class="ava-alert__icon" style="background: #434D8C;">
        <div class="svg-box">
            <svg class="circular yellow-stroke">
                <circle class="path" cx="75" cy="75" r="50" fill="none" stroke-width="5"
                    stroke-miterlimit="10" />
            </svg>
            <svg class="alert-sign yellow-stroke">
                <g transform="matrix(1,0,0,1,-615.516,-257.346)">
                    <g transform="matrix(0.56541,-0.56541,0.56541,0.56541,93.7153,495.69)">
                        <path class="line" d="M634.087,300.805L673.361,261.53" fill="none" />
                    </g>
                    <g transform="matrix(2.27612,-2.46519e-32,0,2.27612,-792.339,-404.147)">
                        <circle class="dot" cx="621.52" cy="316.126" r="1.318" />
                    </g>
                </g>
            </svg>
        </div>
    </div>

      `;

        } else if (icon == 'danger' && toast == false) {
            avaIcon = `
        <div class="ava-alert__icon" style="background: #8C4343;">
        <div class="svg-box">
            <svg class="circular red-stroke">
            <circle class="path" cx="75" cy="75" r="50" fill="none" stroke-width="5" stroke-miterlimit="10"/>
        </svg>
        <svg class="cross red-stroke">
            <g transform="matrix(0.79961,8.65821e-32,8.39584e-32,0.79961,-502.652,-204.518)">
                <path class="first-line" d="M634.087,300.805L673.361,261.53" fill="none"/>
            </g>
            <g transform="matrix(-1.28587e-16,-0.79961,0.79961,-1.28587e-16,-204.752,543.031)">
                <path class="second-line" d="M634.087,300.805L673.361,261.53"/>
            </g>
        </svg>
        </div>
    </div>
      `;

        } else if (icon == 'info' && toast == true) {
            avaIcon = `
            <div class="ava-alert__icon" style="background: #434D8C;">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0"/></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M12 7V13"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0"/></path></g><circle cx="12" cy="17" r="1" fill="currentColor" fill-opacity="0"><animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.4s" values="0;1"/></circle></svg>
    </div>
            `;
            btnText = '';
        } else if (icon == 'success' && toast == true) {
            avaIcon = `
            <div class="ava-alert__icon" style="background: #438C5E;">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0"/></path><path stroke-dasharray="14" stroke-dashoffset="14" d="M8 12L11 15L16 10"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="14;0"/></path></g></svg>
    </div>
            `;
            btnText = '';
        } else if (icon == 'danger' && toast == true) {
            avaIcon = `
            <div class="ava-alert__icon" style="background: #8C4343;">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0"/></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M12 12L16 16M12 12L8 8M12 12L8 16M12 12L16 8"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0"/></path></g></svg>
    </div>
            `;
            btnText = '';
        } else if (toast == true && icon == 'none') {
            avaIcon = '';
            btnText = '';
        } else if (toast == false && icon == 'none') {
            avaIcon = '';
        }
        document.querySelector('.ava-alert').innerHTML = `
  ${avaIcon}
<div class='ava-text-con'>
    <p class="ava-alert__text">
    ${text}
    </p>
    <button class="ava-alert__btn">${btnText}</button>
</div>
    `;
        var new_timer_format = '';
        switch (timer) {
            case 1000:
                new_timer_format = '1s';
                break;
            case 2000:
                new_timer_format = '2s';
                break;
            case 3000:
                new_timer_format = '3s';
                break;
            case 4000:
                new_timer_format = '4s';
                break;
            case 5000:
                new_timer_format = '5s';
                break;
            case 6000:
                new_timer_format = '6s';
                break;
            case 7000:
                new_timer_format = '7s';
                break;
            case 8000:
                new_timer_format = '8s';
                break;
            case 9000:
                new_timer_format = '9s';
                break;
            case 10000:
                new_timer_format = '10s';
                break;
            default:
                new_timer_format = '4s';
        }
        if (timer > 10000) {
            timer = 4000;
        }
        if (toast == true) {
            modal.style = 'background-color: rgba(0, 0, 0, 0);';
            alert.classList.add('ava-toast');
            if (progressBar == false) {
                document.querySelector('.ava-alert__btn').remove();
            } else {
                document.querySelector('.ava-alert__btn').style = 'width: 100%; padding: 2px;'
            }
            switch (position) {
                case 'top-right':
                    alert.style = `
            top: 10px;
            right: 10px;
            `;
                    break;
                case 'top-left':
                    alert.style = `
            top: 10px;
            left: 10px;
            `;
                    break;
                case 'bottom-left':
                    alert.style = `
                bottom: 10px;
                left: 10px;
            `;
                    break;
                case 'bottom-right':
                    alert.style = `
                bottom: 10px;
            right: 10px;
            `;
                    break;
            }
        }
        if (progressBar == true) {
            const progressBar_el = document.createElement('div');
            progressBar_el.setAttribute('class', 'ava-progress-bar');
            document.querySelector('.ava-alert__btn').appendChild(progressBar_el);
            document.querySelector('.ava-progress-bar').style = `
        animation-duration: ${new_timer_format};
-webkit-animation-duration: ${new_timer_format};
        `;
        }

        if (progressBar == true) {
            setTimeout(() => {
                modal.remove();
                alert.remove();
            }, timer);
        } else if (progressBar == false && toast == true) {
            setTimeout(() => {
                modal.remove();
                alert.remove();
            }, timer);
        }
        if (direction == 'rtl' && toast == true) {
            document.querySelector('.ava-modal > *').style.direction = 'rtl';
            document.querySelector('.ava-modal > *').style.textAlign = 'right';
            document.querySelector('.ava-alert__btn').style.direction = 'rtl';
        } else if (direction == 'ltr' && toast == true) {
            document.querySelector('.ava-modal > *').style.direction = 'ltr';
            document.querySelector('.ava-modal > *').style.textAlign = 'left';
            document.querySelector('.ava-alert__btn').style.direction = 'ltr';
        } else {
            document.querySelector('.ava-modal > *').style.textAlign = 'center';
        }
        document.querySelector('.ava-alert__btn').addEventListener('click', function () {
            alert.remove();
            modal.remove();
        })
        window.addEventListener('click', function (e) {
            if (e.target == document.querySelector('.ava-modal')) {
                modal.remove();
                alert.remove();
            }

        })
    }

    $scope.danger = function() {
        ava({
            icon: 'danger',
            text: 'Login Failed, please check your Username and Password',
            btnText: 'Okay',
            progressBar: true,
            toast: false,
        });
    }

    $scope.GetAllAcccounts();
})