<template>
    <div>
        <section class="report-section">
            <section class="main">
            <DashboardNav/>
            <div class="content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-2"></div>
                        <div class="col-md-8 card">
                            <h4 class="text-center">Lay all your complaints to us here</h4>
                            <form>
                                <div class="form-group">
                                <label for="Title">Title</label>
                                <input type="text" class="form-control" id="reportTitle" aria-describedby="Report" placeholder="Enter Your Title" >
                                </div>
                                <div class="form-group">
                                    <label for="Message">Your Report</label>
                                    <textarea class="form-control" id="reportContent" rows="2" placeholder="content"></textarea>
                                </div>

                                <button type="submit" class="btn btn-danger pull-right" @click.prevent="makeReport">Submit</button>
                            </form>
                        </div>
                        <div class="col-md-2"></div>
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
            
        </section>
    </div>
</template>

<script>
import DashboardNav from './../../components/partials/DashboardNavbar'

export default {
    layout: 'Udashboard',
    components: {
        DashboardNav
    }
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

    .card {
        padding: 20px;
    }

    .main-footer {
    background: rgba(203, 203, 210, 0.15);
    position: relative;
    float: right;
    width: calc(100% - 100px);
    padding: 10px;
    }
</style>