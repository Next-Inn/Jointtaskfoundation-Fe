<template>
    <div>
        <section class="main">
            <DashboardNav/>
            <div class="content">
                <div class="container">
                    <div class="row mb-5">
                        <div class="col-md-3">
                            <h2>John Doe</h2>
                        </div>
                        <div class="col-md-6"></div>
                        <div class="col-md-3">
                            <h4>Level 1 <span class="badge badge-info">2</span></h4>
                        </div>
                    </div>
                    <div class="tree">
                        <div class="row">
                            <div class="col-8 text-center">
                                <img src="../../assets/img/93.png" alt="" class="img-fluid small-img">
                                <h5>Jack Bill <span class="badge badge-success">4</span></h5>
                            </div>
                            <div class="col-md-4">
                                <p>Upliner</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-8 text-center">
                                <div class="pointer text-center"></div>
                            </div>
                            <div class="col-md-4">
                            
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-8 text-center">
                                <img src="../../assets/img/93.png" alt="" class="img-fluid small-img">
                                <h5>John Doe <span class="badge badge-info">2</span></h5>
                            </div>
                            <div class="col-md-4">
                                
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-8 text-center">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="pointer text-center"></div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="pointer text-center"></div>
                                    </div>
                                </div>
                               
                            </div>
                            <div class="col-md-4">
                               
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="col-8 text-center">
                                <div class="row">
                                    <div class="col-md-6">
                                        <img src="../../assets/img/93.png" alt="" class="img-fluid small-img">
                                        <h5>Sarah Connor <span class="badge badge-info">2</span></h5>
                                    </div>
                                    <div class="col-md-6">
                                         <img src="../../assets/img/93.png" alt="" class="img-fluid small-img">
                                        <h5>Jack Bower <span class="badge badge-danger">1</span></h5>
                                        <form>
                                            <label class="radio-inline">
                                            <input type="radio" name="optradio" checked>paid
                                            </label>
                                            <label class="radio-inline">
                                            <input type="radio" name="optradio">Yet to pay
                                            </label>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <p>Downliners</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            
        </section>
        <footer class="main-footer">
        <strong>Copyright &copy; 2020 <a href="#">HackTeam</a>.</strong>
        All rights reserved.
        <div class="pull-right d-none d-sm-inline-block">
            <b>Version</b> 3.0.2
        </div>
        </footer>
    </div>
</template>

<script>
import DashboardNav from './../../components/partials/DashboardNavbar'

export default {
     middleware: ['redirectIfAuthenticated'],
    layout: 'Udashboard',
    components: {
        DashboardNav
    },
}
</script>

<style scoped>
    .main {
    background: rgba(203, 203, 210, 0.15);
    position: relative;
    float: right;
    width: calc(100% - 100px);
    }

    .main .content {
    padding: 30px 15px;
    min-height: calc(100vh - 160px);
    /* margin-top: 30px; */
    background: #dddddd;
    }

    .pointer {
        width: 4px;
        height: 50px;
        border: 1px solid #000;
        margin: 20px auto;
        background: #000;

    }

    .small-img {
        height: 100px;
    }

    .main-footer {
    background: rgba(203, 203, 210, 0.15);
    position: relative;
    float: right;
    width: calc(100% - 100px);
    padding: 10px;
    }

</style>