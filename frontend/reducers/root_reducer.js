import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import ModalReducer from './modal_reducer';
import PostingReducer from './posting_reducer';
import PostingDetailReducer from './posting_detail_reducer';
import CompanyReducer from './company_reducer';
import CompanyDetailReducer from './company_detail_reducer';
import ApplicationReducer from './application_reducer';
import ReviewReducer from './review_reducer';
import QueryReducer from './query_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  modal: ModalReducer,
  postingDetail: PostingDetailReducer,
  postings: PostingReducer,
  companies: CompanyReducer,
  companyDetail: CompanyDetailReducer,
  application: ApplicationReducer,
  reviews: ReviewReducer,
  existingQuery: QueryReducer
});

export default RootReducer;
