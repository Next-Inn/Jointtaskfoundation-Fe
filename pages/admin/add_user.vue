<template>
    <div>
        <section class="main">
            <DashboardNav/>
            <div class="content">
                <div class="container">
                    <div class="page-header">
                        <h3 class="page-title pull-right"> Data table </h3>
                    </div>
                     <div class="user-add-list">
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
                </table>
        </div>
                </div>
            </div>
        </section>


       
        
    </div>
</template>

<script>
import DashboardNav from './../../components/partials/DashboardNavbar'
export default {
     middleware: ['redirectIfGuest'],
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

    .main-footer {
    background: rgba(203, 203, 210, 0.15);
    position: relative;
    float: right;
    width: calc(100% - 100px);
    padding: 10px;
    }
</style>
