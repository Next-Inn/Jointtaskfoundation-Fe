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
                            <h2 class="text-center font-bold-blue">Request for Loan</h2>
                            <form>
                                <div class="form-group">
                                    <label for="Amount"> Amount</label>
                                    <input type="text" class="form-control" id="reportTitle" aria-describedby="Widthdraw" placeholder="Enter Your Amount" >
                                </div>
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" class="form-control" id="reportTitle" aria-describedby="Widthdraw" placeholder="Enter Your Email" >
                                </div>
                                <div class="form-group">
                                    <label for="bank-account">Bank Account</label>
                                    <input type="text" class="form-control" id="" aria-describedby="Widthdraw" placeholder="Enter Your Bank" >
                                </div>
                                <div class="form-group">
                                    <label for="account-name">Account Name</label>
                                    <input type="text" class="form-control" id="" aria-describedby="Widthdraw" placeholder="Enter Your Account Name" >
                                </div>
                                <div class="form-group">
                                    <label for="account-number">Account Number</label>
                                    <input type="text" class="form-control" id="" aria-describedby="Widthdraw" placeholder="Enter Your Account Number" >
                                </div>

                                <button type="submit" class="btn btn-blue  pull-right" >Submit Request</button>
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
    },
    methods() {
        
    }
}
</script>

<style scoped>
   

    .card {
        padding: 20px;
    }

 
</style>