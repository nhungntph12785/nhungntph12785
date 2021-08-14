
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListProduct from "./pages/admin/product/list";
import ListCategory from "./pages/admin/category/list";
import AddProductForm from "./pages/admin/product/add";
import AddCategoryForm from "./pages/admin/category/add";
import EditProductForm from "./pages/admin/product/edit";
import EditCategoryForm from "./pages/admin/category/edit";
import AdminLayout from "./layouts/AdminLayout";
import WebsiteLayout from "./layouts/WebsiteLayout";
import Signup from "./pages/website/signup";
import Signin from "./pages/website/signin";
import Homepage from "./pages/website/homepage";
import Details from "./pages/website/details";
import Contact from "./pages/website/contact";
import ProCate from "./pages/website/pro_cate";


const Routes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin">
          <AdminLayout>
            <Switch>
              <Route exact path="/admin/product">
                <ListProduct {...props} />
              </Route>
              <Route exact path="/admin/category">
                <ListCategory {...props} />
              </Route>
              <Route exact path="/admin/product/add">
                <AddProductForm {...props} />
              </Route>
              <Route exact path="/admin/category/add">
                <AddCategoryForm {...props} />
              </Route>
              <Route exact path="/admin/product/:id/edit">
                <EditProductForm {...props} />
              </Route>
              <Route exact path="/admin/category/:id/edit">
                <EditCategoryForm {...props} />
              </Route>
            </Switch>
          </AdminLayout>
        </Route>
        <Route>
          <WebsiteLayout>
            <Switch>
              <Route exact path="/signup">
                <Signup  {...props}/>
              </Route>
              <Route exact path="/contact">
                <Contact  {...props}/>
              </Route>
              <Route exact path="/">
                <Homepage  {...props}/>
              </Route>
              <Route exact path="/pro_cate/:categoryId">
                <ProCate  {...props}/>
              </Route>
              <Route exact path="/details/id">
                <Details  {...props}/>
              </Route>
              <Route exact path="/signin">
                <Signin  {...props}/>
              </Route>
            </Switch>
          </WebsiteLayout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;

