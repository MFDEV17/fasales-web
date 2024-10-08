import { storeItemSchema, type StoreItem } from "~/types/types";

export const useDialogForm = () => {
  const dialog = useDialogStore();
  const { categoryRef, cartRef, dialogType } = storeToRefs(dialog);

  const initialValues = computed(() => {
    return {
      weight:
        dialogType.value === "update"
          ? cartRef.value?.weight
          : categoryRef.value?.categoryDefWeight,
      price: dialogType.value === "update" ? cartRef.value?.price : undefined,
      productLink:
        dialogType.value === "update" ? cartRef.value?.productLink : undefined,
    };
  });

  const cartStore = useCartStore();
  const { shops, carts } = storeToRefs(cartStore);

  const {
    handleSubmit,
    setFieldValue,
    values: { weight },
  } = useForm({
    validationSchema: toTypedSchema(storeItemSchema),
    initialValues: { ...initialValues.value },
  });

  const link = useFieldValue<string>("productLink");
  const extraDeliveryPrice = useFieldValue<number>("extraDeliveryPrice");

  watchDebounced(
    link,
    () => {
      const userURL = new URL(link.value).hostname;
      const shop = shops.value.find(
        (i) => new URL(i.shopLink).hostname === userURL,
      );

      if (shop) {
        setFieldValue("extraDeliveryPrice", shop.deliveryPrice);
        return;
      } else {
        setFieldValue("extraDeliveryPrice", 0);
        return;
      }
    },
    { debounce: 400 },
  );

  const onSubmit = handleSubmit((val) => {
    if (dialogType.value === "create") {
      const storeCart: StoreItem = {
        ...val,
        itemId: carts.value.length.toString(),
        categoryRef: categoryRef.value!,
      };
      cartStore.addCart(storeCart);
    }

    if (dialogType.value === "update") {
      cartStore.editCart(cartRef.value?.itemId!, { ...val });
    }
    dialog.toggleOpenDialog();
  });

  return {
    extraDeliveryPrice,
    weight,
    initialValues,
    categoryChoice: categoryRef.value,
    cartRef,

    onSubmit,
  };
};
