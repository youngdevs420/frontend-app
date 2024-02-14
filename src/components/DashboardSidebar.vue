<script setup></script>

<template>
    <nav class="dashboard-sidebar">
        <div class="inner-sidebar">
            <div class="sidebar-top px-3 pb-3">
                <img src="../assets/images/logo.png" width="180" height="50" alt="" class="hide">
                <span class="shrink-btn">
                    <i class='fa fa-bars text-light'></i>
                </span>
            </div>
            <div class="sidebar-links mt-3 px-3">
                <ul class="nav">
                    <div class="active-tab"></div>
                    <li class="tooltip-element nav-item" data-tooltip="1">
                        <a href="#" data-active="1" class="nav-link active">
                            <div class="icon">
                                <img src="../assets/icons/dashboard.png" alt="">
                            </div>
                            <span class="link hide">Dashboard</span>
                        </a>
                    </li>
                    <li class="tooltip-element nav-item" data-tooltip="1">
                        <a href="#" data-active="1" class="nav-link">
                            <div class="icon">
                                <img src="../assets/icons/user.png" alt="">
                            </div>
                            <span class="link hide">Insureds</span>
                        </a>
                    </li>
                    <li class="tooltip-element nav-item" data-tooltip="2">
                        <a href="#" data-active="2" class="nav-link">
                            <div class="icon">
                                <img src="../assets/icons/log.png" alt="">
                            </div>
                            <span class="link hide">Receipt Log</span>
                        </a>
                    </li>
                    <li class="tooltip-element nav-item" data-tooltip="2">
                        <a href="#" data-active="2" class="nav-link">
                            <div class="icon">
                                <img src="../assets/icons/payment.png" alt="">
                            </div>
                            <span class="link hide">Collect Payment</span>
                        </a>
                    </li>
                    <li class="tooltip-element nav-item" data-tooltip="2">
                        <a href="#" data-active="2" class="nav-link">
                            <div class="icon">
                                <img src="../assets/icons/reload.png" alt="">
                            </div>
                            <span class="link hide">Renewals</span>
                        </a>
                    </li>
                    <li class="tooltip-element nav-item" data-tooltip="2">
                        <a href="#" data-active="2" class="nav-link">
                            <div class="icon">
                                <img src="../assets/icons/calendar.png" alt="">
                            </div>
                            <span class="link hide">Calendar</span>
                        </a>
                    </li>
                    <li class="tooltip-element nav-item" data-tooltip="2">
                        <a href="#" data-active="2" class="nav-link">
                            <div class="icon">
                                <img src="../assets/icons/quote.png" alt="">
                            </div>
                            <span class="link hide">Quick Quote</span>
                        </a>
                    </li>
                    <li class="tooltip-element nav-item" data-tooltip="2">
                        <a href="#" data-active="2" class="nav-link">
                            <div class="icon">
                                <img src="../assets/icons/gusto.png" alt="">
                            </div>
                            <span class="link hide">Gusto</span>
                        </a>
                    </li>
                    <li class="tooltip-element nav-item" data-tooltip="2">
                        <a href="#" data-active="2" class="nav-link">
                            <div class="icon">
                                <img src="../assets/icons/mail.png" alt="">
                            </div>
                            <span class="link hide">MailChimp</span>
                        </a>
                    </li>
                    <li class="tooltip-element nav-item" data-tooltip="2">
                        <a href="#" data-active="2" class="nav-link">
                            <div class="icon">
                                <img src="../assets/icons/history.png" alt="">
                            </div>
                            <span class="link hide">BF History</span>
                        </a>
                    </li>
                    <li class="tooltip-element nav-item" data-tooltip="2">
                        <a href="#" data-active="2" class="nav-link">
                            <div class="icon">
                                <img src="../assets/icons/fee.png" alt="">
                            </div>
                            <span class="link hide">CC Fee History</span>
                        </a>
                    </li>
                    <li class="tooltip-element nav-item" data-tooltip="2">
                        <a href="#" data-active="2" class="nav-link">
                            <div class="icon">
                                <img src="../assets/icons/care.png" alt="">
                            </div>
                            <span class="link hide">Insurance Carriers</span>
                        </a>
                    </li>
                    <li class="tooltip-element nav-item" data-tooltip="2">
                        <a href="#" data-active="2" class="nav-link">
                            <div class="icon">
                                <img src="../assets/icons/team.png" alt="">
                            </div>
                            <span class="link hide">TOI Team</span>
                        </a>
                    </li>
                    <li class="tooltip-element nav-item" data-tooltip="2">
                        <a href="#" data-active="2" class="nav-link">
                            <div class="icon">
                                <img src="../assets/icons/doc.png" alt="">
                            </div>
                            <span class="link hide">TOI Docs</span>
                        </a>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.dashboard-sidebar {
    position: sticky !important;
    top: 0;
    left: 0;
    min-height: 100vh;
    background-color: #fff;
    width: 300px;
    display: flex;
    flex-direction: column;
    transition: width 0.5s ease-in-out;
}

.dashboard-sidebar::before {
    content: "";
    position: absolute;
    width: 2rem;
    height: 100%;
    top: 0;
    left: 100%;
}



.sidebar-top {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #EBEDF2;
}


.shrink-btn {
    position: absolute;
    top: 50%;
    height: 27px;
    padding: 0 0.3rem;
    background-color: #3d5af1;
    border-radius: 6px;
    cursor: pointer;
    box-shadow: 0 3px 10px -3px rgba(70, 46, 118, 0.3);
    right: 0rem;
    transform: translateY(-50%) translateX(-8px);
    opacity: 0;
    transition: 0.3s;
}

.shrink-btn i {
    line-height: 27px;
    transition: 0.3s;
}

.shrink-btn:hover {
    background-color: #3651d4;
}

.dashboard-sidebar:hover .shrink-btn,
.shrink-btn.hovered {
    transform: translateY(-50%) translateX(0px);
    opacity: 1;
    pointer-events: all;
}

.sidebar-links ul {
    position: relative;
}

.sidebar-links li {
    position: relative;
    padding: 2.5px 0;
}

.sidebar-links a {
    color: #667085 !important;
    /* font-family: Plus Jakarta Sans; */
    font-size: 16px;
    letter-spacing: 0em;

    display: flex;
    align-items: center;
    height: 53px;
}

.icon {
    font-size: 1.3rem;
    text-align: center;
    min-width: 3.7rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
}


.sidebar-links a.active {
    color: #fff !important;
    font-weight: 700;
}

.sidebar-links a .link {
    transition: opacity 0.3s 0.2s, color 0.3s;
}

.sidebar-links a.active i:first-child {
    opacity: 0;
}

.sidebar-links a.active i:last-child {
    opacity: 1;
}

.active-tab {
    width: 100%;
    height: 53px;
    background-color: #3651d4;
    border-radius: 10px;
    position: absolute;
    top: 2.5px;
    left: 0;
    transition: top 0.3s;
}


/* When the menu shrinks */

.hide {
    transition: opacity 0.3s 0.2s;
}

body.shrink nav {
    width: 5.4rem;
}

body.shrink .hide {
    opacity: 0;
    pointer-events: none;
    transition-delay: 0s;
}
</style>