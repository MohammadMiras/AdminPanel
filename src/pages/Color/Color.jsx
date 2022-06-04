const Color =()=>{

    return(

        <div class="modal fade" id="add_color_modal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title flex-fill" id="exampleModalLabel">افزودن رنگ</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-12">
                            <div class="input-group my-3" style="direction: ltr;">
                                <input type="text" class="form-control" placeholder=""/>
                                <span class="input-group-text w_8rem justify-content-center">نام رنگ</span>
                            </div>
                        </div>
                        <div class="col-12">
                            <label for="exampleColorInput" class="form-label">انتخاب رنگ</label>
                            <input type="color" class="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color">
                        </div>                        
                        <div class="btn_box text-center col-12 col-md-6 col-lg-8 mt-4">
                            <button class="btn btn-primary ">ذخیره</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">انصراف</button>
            </div>
            </div>
        </div>
    </div>
    )
}
export default Color