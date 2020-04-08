<template>
    <div>
        <section class="main">
            <DashboardNav/>
            <div class="content">
                <div class="container">
                    <div class="page-header">
                        <h3 class="page-title pull-right"> Data table </h3>
                        <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Tables</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Data table</li>
                        </ol>
                        </nav>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">User List</h4>
                            <div class="row">
                                <div class="col-12">
                                    <div class="row">
                                        <div class="col-sm-12 col-md-6">
                                            <div class="dataTables_length" id="order-listing_length">
                                                <label>Show 
                                                    <select name="order-listing_length" aria-controls="order-listing" class="custom-select custom-select-sm form-control">
                                                        <option value="5">5</option>
                                                        <option value="10">10</option>
                                                        <option value="15">15</option>
                                                        <option value="-1">All</option>
                                                    </select> 
                                                    entries
                                                </label>
                                            </div>
                                        </div>
                                                
                                        <div class="col-sm-12 col-md-6">
                                            <div id="order-listing_filter" class="dataTables_filter">
                                                <label>
                                                    <input type="search" class="form-control" placeholder="Search" aria-controls="order-listing">
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-12">
                                    <table class="table table-striped">
                                        <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Username</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Date of Reg</th>
                                            <th scope="col">Stage</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark Otto</td>
                                            <td>M-Otto</td>
                                            <td>m-otto@gmail.com</td>
                                            <td>1st Feb 2020</td>
                                            <td><label class="badge badge-info">Stage 2 (Sapphire)</label></td>
                                            <td><button class="btn btn-outline-primary">View</button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob Thornton</td>
                                            <td>Thornton</td>
                                            <td>fat@gmail.com</td>
                                            <td>21st dec 2020</td>
                                            <td><label class="badge badge-danger">Stage 1 (Copper)</label></td>
                                            <td><button class="btn btn-outline-primary">View</button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry Bird</td>
                                            <td>the Bird</td>
                                            <td>LarryB@gmail.com</td>
                                            <td>1st Feb 2020</td>
                                            <td><label class="badge badge-success">Stage 3 (Ruby)</label></td>
                                            <td><button class="btn btn-outline-primary">View</button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Mark Otto</td>
                                            <td>M-Otto</td>
                                            <td>m-otto@gmail.com</td>
                                            <td>1st Feb 2020</td>
                                            <td><label class="badge badge-info">Stage 2 (Sapphire)</label></td>
                                            <td><button class="btn btn-outline-primary">View</button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td>Mark Otto</td>
                                            <td>M-Otto</td>
                                            <td>m-otto@gmail.com</td>
                                            <td>1st Feb 2020</td>
                                            <td><label class="badge badge-info">Stage 2 (Sapphire)</label></td>
                                            <td><button class="btn btn-outline-primary">View</button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">6</th>
                                            <td>Mark Otto</td>
                                            <td>M-Otto</td>
                                            <td>m-otto@gmail.com</td>
                                            <td>1st Feb 2020</td>
                                            <td><label class="badge badge-info">Stage 2 (Sapphire)</label></td>
                                            <td><button class="btn btn-outline-primary">View</button></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-12 col-md-5">
                                    <div class="dataTables_info" id="order-listing_info" role="status" aria-live="polite">Showing 1 to 10 of 10 entries</div>
                                    </div>
                                    <div class="col-sm-12 col-md-7">
                                        <div class="dataTables_paginate paging_simple_numbers" id="order-listing_paginate">
                                            <ul class="pagination">
                                                <li class="paginate_button page-item previous disabled" id="order-listing_previous"><a href="#" aria-controls="order-listing" data-dt-idx="0" tabindex="0" class="page-link">Previous</a>
                                                </li>
                                                <li class="paginate_button page-item active"><a href="#" aria-controls="order-listing" data-dt-idx="1" tabindex="0" class="page-link">1</a>
                                                </li>
                                                <li class="paginate_button page-item next disabled" id="order-listing_next">
                                                    <a href="#" aria-controls="order-listing" data-dt-idx="2" tabindex="0" class="page-link">Next</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
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
    layout: 'dashboard',
    components: {
        DashboardNav
    }
}
</script>

<style scoped>
    
/* userlist */

     .main {
        background: rgba(203, 203, 210, 0.15);
        position: relative;
        float: right;
        width: calc(100% - 100px);
    }

    .main .content {
        padding: 30px 15px;
        min-height: calc(100vh - 160px);
        margin-top: 30px;
        background: #f2edf3;
    }

    .page-header {
        margin: 0 0 1.5rem 0;
        display: flex;
        justify-content: space-between !important;
    }

    .page-title {
        color: #343a40;
        font-size: 1.125rem;
        margin-bottom: 0;
    }

    .table-striped {
        clear: both;
        margin-top: 6px !important;
        margin-bottom: 6px !important;
        max-width: none !important;
        border-collapse: separate !important;
        border-spacing: 0;
    }

    div.dataTables_length label {
        font-weight: normal;
        text-align: left;
        white-space: nowrap;
    }

    div.dataTables_filter {
        text-align: right;
    }

    .badge {
        padding: .5em .7em !important;
    }

    div.dataTables_paginate ul.pagination {
        margin: 2px 0;
        white-space: nowrap;
        justify-content: flex-end;
    }

    .pagination {
        overflow-x: scroll;
    }

    .main-footer {
        background: rgba(203, 203, 210, 0.15);
        position: relative;
        float: right;
        width: calc(100% - 100px);
        padding: 10px;
    }

</style>